import http from "utils/http";

export default function validate(email) {
	return http
		.post('/auth/checkMail', {email})
		.then(response => response.data);
}