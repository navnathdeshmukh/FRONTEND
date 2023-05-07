document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent the form from submitting

	// Get user credentials from the form
	const user_id = document.querySelector('#user_id').value;
	const password = document.querySelector('#password').value;

	// Check if user credentials match
	if (user_id === '111' && password === '111') {
		window.location.href = '/dashboardA';
	} else if (user_id === 'userB' && password === 'passwordB') {
		window.location.href = '/dashboardB';
	} else {
		// Show an error message if credentials are incorrect
		const error_message = document.querySelector('#error-message');
		error_message.innerHTML = 'Incorrect user ID or password';
	}
});
