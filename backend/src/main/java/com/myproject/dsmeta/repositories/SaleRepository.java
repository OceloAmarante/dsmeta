package com.myproject.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myproject.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {   //Salva, deleta, edita as vendas no banco

}