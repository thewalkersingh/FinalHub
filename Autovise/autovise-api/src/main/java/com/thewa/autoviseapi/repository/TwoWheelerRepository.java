package com.thewa.autoviseapi.repository;
import com.thewa.autoviseapi.dto.TwoWheelerDTO;
import com.thewa.autoviseapi.entity.TwoWheeler;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TwoWheelerRepository {
	@Autowired
	private EntityManager entityManager;
	
	public List<TwoWheeler> getAll() {
		Session session = entityManager.unwrap(Session.class);
		return session.createQuery("select t from TwoWheeler t", TwoWheeler.class).getResultList();
	}
	
	public TwoWheeler getById(Long id) {
		Session session = entityManager.unwrap(Session.class);
		return session.get(TwoWheeler.class, id);
	}
	
	public String add(TwoWheelerDTO twoWheelerDTO) {
		Session session = entityManager.unwrap(Session.class);
		TwoWheeler twoWheeler = new TwoWheeler(twoWheelerDTO);
		session.persist(twoWheeler);
		return "Two Wheeler added";
	}
}