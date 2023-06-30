package com.JuliaSystem.JuliaSystem.contract.Payment;


import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    //@Override
    //Optional<Payment> findById(Integer integer);
}
