package com.thewa.autoviseapi.entity;
import com.thewa.autoviseapi.constants.VEHICLE_TYPE;
import com.thewa.autoviseapi.dto.TwoWheelerDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TwoWheeler {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private double engineCapacity;
	private double mileage;
	private double weight;
	private double price;
	private String mfgDate;
	private String registration;
	private VEHICLE_TYPE vehicleType;
	
	public TwoWheeler(TwoWheelerDTO twoWheelerDTO) {
		this.name = twoWheelerDTO.getName();
		this.engineCapacity = twoWheelerDTO.getEngineCapacity();
		this.mileage = twoWheelerDTO.getMileage();
		this.weight = twoWheelerDTO.getWeight();
		this.price = twoWheelerDTO.getPrice();
		this.mfgDate = twoWheelerDTO.getMfgDate();
		this.registration = twoWheelerDTO.getRegistration();
		this.vehicleType = twoWheelerDTO.getVehicleType();
	}
}