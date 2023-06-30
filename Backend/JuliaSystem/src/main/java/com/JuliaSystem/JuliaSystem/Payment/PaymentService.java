package com.JuliaSystem.JuliaSystem.contract.Payment;

import com.JuliaSystem.JuliaSystem.contract.Contract;
import com.JuliaSystem.JuliaSystem.contract.ContractService;
import com.JuliaSystem.JuliaSystem.contract.ContractStage;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PaymentService {
    private final PaymentRepository paymentRepository;
    public List<Payment> getPaymentsByContract (Integer contractID) {
        List<Payment> payments = paymentRepository.findAll();
       return payments.stream().filter(payment -> payment.getContractID() == contractID).toList();

    }

    public Integer getContractTotalPaid (Integer contractID) {
        List<Payment> payments = getPaymentsByContract(contractID);

        Integer totalPaid =  payments.stream().map(payment -> payment.getAmount()).reduce(0, Integer::sum);
        return totalPaid;
    }

    public void makePayment (Integer contractID, String paymentTitle, Integer amount) {
        Payment payment = new Payment(contractID,paymentTitle,amount);

        paymentRepository.save(payment);
    }
}
