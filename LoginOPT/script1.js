const otpInputs = document.querySelectorAll('.otp-input');
const confirmButton = document.getElementById('confirm-btn');

// Focus on next input automatically when a digit is entered
otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && index > 0 && input.value === '') {
            otpInputs[index - 1].focus();
        }
    });
});

// Handle confirm button click
confirmButton.addEventListener('click', () => {
    const otpCode = Array.from(otpInputs).map(input => input.value).join('');
    if (otpCode.length === 6) {
        alert(`OTP Code entered: ${otpCode}`);
        // You can add further actions here, such as submitting the OTP for validation
    } else {
        alert('Por favor, insira todos os 6 dígitos.');
    }
});
