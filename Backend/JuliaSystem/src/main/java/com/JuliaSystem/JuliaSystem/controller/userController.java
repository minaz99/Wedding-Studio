package com.JuliaSystem.JuliaSystem.controller;


import com.JuliaSystem.JuliaSystem.user.User;
import com.JuliaSystem.JuliaSystem.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping("/home")
@AllArgsConstructor
public class userController {

    private final UserService userService;
    //@Autowired
   // public homeController(UserService userService) {this.userService = userService;}

    @GetMapping
    public ResponseEntity<String> welcome(){
        return ResponseEntity.ok("Hello! from a secured endpoint");
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @DeleteMapping(path = "/user/{userID}")
    public void deleteUser(@PathVariable("userID") Integer userID) {
        userService.deleteUser(userID);
    }
    @PutMapping(path = "/user/{userID}")
    public void updateUser(@PathVariable("userID") Integer userID,@RequestParam(required = false) String email, @RequestParam(required = false) String password, @RequestParam(required = false) String phoneNumber, @RequestParam(required = false) String address) {
        userService.updateUser(userID,email,password);
    }


    @PutMapping(path = "user/{userID}/request/{requestID}/offer/{offerID}")
    public ResponseEntity<String> acceptOffer(@PathVariable("userID") Integer userID, @PathVariable("requestID") Integer requestID
    ,@PathVariable("offerID") Integer offerID){
        Offer offer = offerService.getOffer(offerID);
        Request request = requestService.getRequest(requestID);
        if(offer.getRequestID() == requestID && request.getRequesteeID() == userID) {
            requestService.acceptOfferForRequest(requestID, offerID);
            offerService.expireAllOffersPerRequest(requestID);
            offerService.changeOfferStatus(offerID, offerStatus.ACCEPTED);
            return ResponseEntity.ok("Offer was accepted");
        }
        throw new IllegalStateException("Offer does not exist for this request / no such request was made by this user");
    }
    @PostMapping(path = "user/{userID}/request/{requestID}/offer")
    public ResponseEntity<String> makeOffer(@PathVariable("userID") Integer userID, @PathVariable("requestID") Integer requestID, @RequestBody Offer offer){
        boolean offerMade = offerService.makeOffer(userID,requestID,offer);
        if(offerMade == true) return ResponseEntity.ok("Offer was made to this request");
        throw new IllegalStateException("You can't make an offer to your request");
    }

    @GetMapping(path = "user/{userID}/requests/")
    public Stream<Request> getRequestsByStatus(@PathVariable("userID") Integer userID, @RequestParam STATUS status){
        return requestService.getRequestsByStatus(userID,status);
    }

    @GetMapping(path = "user/{userID}/offers/")
    public Stream<Offer> getOffersByStatus(@PathVariable("userID") Integer userID, @RequestParam offerStatus offerStatus){
        return offerService.getOffersByStatus(userID,offerStatus);
    }
    @GetMapping(path = "user/{userID}/requests")
    public Object getRequests(@PathVariable("userID")Integer userID){
        return requestService.getRequestsByUser(userID);
    }

    @GetMapping(path = "user/{userID}/offers/request/{requestID}")
    public OfferPerRequest getOffersPerRequest(@PathVariable("userID") Integer userID, @PathVariable("requestID") Integer requestID){
        return offerService.getOffersPerRequest(requestID);
    }

    @GetMapping(path = "user/{userID}/offers")
    public MyOffers getOffers(@PathVariable("userID")Integer userID){
        return offerService.getOffersByUser(userID);
    }







}
