package com.login;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	Log log = LogFactory.getLog(LoginController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homePage() {
		return "index";
	}


	@RequestMapping(value = "/logging/{login}/{key}", method = RequestMethod.GET)
	public Map logging(
			@PathVariable("login") String login, 
			@PathVariable("key") String key) {
		

		Map<String, String> map = new HashMap<String, String>();
		// sprawdzenie czy dane logowania sa poprawnw, jesli tak to true
		log.info("\n login: " + login + " key: " + key);
		String admin = new String("admin");
		if(admin.equals(login) && admin.equals(key)){
			map.put("status", "true");
		}else{
			map.put("status", "false");
		}
		
		return map;
	}


}
