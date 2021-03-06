package com.watkings.domain;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface CourtRepository extends CrudRepository<Court, Long> {

	public Court findById(int id);
	public List<Court> findByName(@Param("name") String name);
	public List<Court> findAll();
	
	@Query(value="SELECT ID FROM court LIMIT 1", nativeQuery = true)
	public int getRandomCourt();	

}