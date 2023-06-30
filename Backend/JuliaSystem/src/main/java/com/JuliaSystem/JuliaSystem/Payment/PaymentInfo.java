package com.JuliaSystem.JuliaSystem.contract.Payment;


import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class PaymentInfo {
    private List<Payment> payments;
    private Integer dueAmount;
    private Integer total;

}
