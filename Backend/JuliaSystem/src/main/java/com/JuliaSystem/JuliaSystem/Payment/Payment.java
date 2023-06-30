package com.JuliaSystem.JuliaSystem.contract.Payment;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name = "Payments")
public class Payment {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer contractID;
    private String paymentTitle;
    private Integer amount;

    public Payment(Integer contractID, String paymentTitle, Integer amount) {
    }
}
