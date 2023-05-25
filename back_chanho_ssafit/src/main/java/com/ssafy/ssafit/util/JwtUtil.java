package com.ssafy.ssafit.util;

import java.io.UnsupportedEncodingException;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {
	private static final String SALT = "SSAFIT";

	public String createToken(String claimId, String data, int isAdmin) throws UnsupportedEncodingException {
		return Jwts.builder().setHeaderParam("alg", "HS256").setHeaderParam("typ", "JWT").claim(claimId, data)
				.claim("isAdmin", isAdmin).setExpiration(new Date(System.currentTimeMillis() + 60000 * 10 * 3))
				.signWith(SignatureAlgorithm.HS256, SALT.getBytes("UTF-8")).compact();
	}

	public void valid(String token) throws Exception {
		Jwts.parser().setSigningKey("SSAFIT".getBytes("UTF-8")).parseClaimsJws(token);
	}

	// isAdmin을 위한 부분
	public static boolean isAdmin(String token) {

		Claims claims = Jwts.parser().setSigningKey("safe").parseClaimsJws(token).getBody();
		boolean isAdmin = (boolean) claims.get("isAdmin");

		return isAdmin;
	}
}
