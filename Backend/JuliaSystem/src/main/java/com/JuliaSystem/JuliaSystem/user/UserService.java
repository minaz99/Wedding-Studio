package com.khadamat.khadamat.user;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;



    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void registerNewUser(User user) {
        Optional<User> userByEmail = userRepository.findByEmail(user.getEmail());
        if(userByEmail.isPresent()) throw new IllegalStateException("Email is taken");
        userRepository.save(user);
    }

    public void deleteUser(Integer userID) {
        boolean userExists = userRepository.existsById(userID);
        if(!userExists) throw new IllegalStateException("User with id " + userID + " doesn't exist");
        userRepository.deleteById(userID);
    }

    @Transactional
    public void updateUser(Integer userID, String email, String password, String address, String phoneNumber) {
        User user = userRepository.findById(userID).orElseThrow(() -> new IllegalStateException(("User with id " + userID + " doesn't exist")));
        if(email != null && email.length() > 0 && !Objects.equals(user.getEmail(),email) )
            user.setEmail(email);
        if(password != null && password.length() > 0 && !Objects.equals(user.getPassword(),password))
            user.setPassword(passwordEncoder.encode(password)); // .password(passwordEncoder.encode(request.getPassword()))
        if(address != null && address.length() > 0 && !Objects.equals(user.getAddress(),address))
            user.setAddress(address);
        if(phoneNumber != null && phoneNumber.length() > 0 && !Objects.equals(user.getPhoneNumber(),phoneNumber) )
            user.setPhoneNumber(phoneNumber);
    }

    public void userExists(String newEmail){
        Optional<User> user = userRepository.findByEmail(newEmail);
        if(user.isPresent()) throw new IllegalStateException("Email is taken");
    }


}

