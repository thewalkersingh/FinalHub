package com.thewa.autoviseapi.service;
import com.thewa.autoviseapi.dto.TwoWheelerDTO;
import com.thewa.autoviseapi.entity.TwoWheeler;
import com.thewa.autoviseapi.repository.TwoWheelerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TwoWheelerService {
	@Autowired
	TwoWheelerRepository twoWheelerRepository;
	
	@Transactional
	public List<TwoWheeler> getAllTwoWheeler() {
		return twoWheelerRepository.getAll();
	}
	
	@Transactional
	public TwoWheeler getTwoWheelerById(Long id) {
		return twoWheelerRepository.getById(id);
	}
	
	@Transactional
	public String addTwoWheeler(TwoWheelerDTO twoWheelerDTO) {
		return twoWheelerRepository.add(twoWheelerDTO);
	}
}