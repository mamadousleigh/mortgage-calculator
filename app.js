// Mortgage Calculator Logic
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('mortgage-form');
	const amountInput = document.getElementById('amount');
	const termInput = document.getElementById('term');
	const interestInput = document.getElementById('intrest');
	const monthlyPaymentSpan = document.getElementById('monthly-payment');
	const totalPaymentSpan = document.getElementById('total-payment ');
	const clearBtn = document.getElementById('clear');

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		const principal = parseFloat(amountInput.value);
		const years = parseFloat(termInput.value);
		const annualRate = parseFloat(interestInput.value);
		const months = years * 12;
		const monthlyRate = annualRate / 100 / 12;

		let monthlyPayment = 0;
		let totalPayment = 0;

		// Always use standard repayment calculation
		if (monthlyRate === 0) {
			monthlyPayment = principal / months;
		} else {
			monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
		}
		totalPayment = monthlyPayment * months;

		monthlyPaymentSpan.textContent = monthlyPayment ? `$${monthlyPayment.toFixed(2)}` : '$0.00';
		totalPaymentSpan.textContent = totalPayment ? `$${totalPayment.toFixed(2)}` : '$0.00';
	});

	clearBtn.addEventListener('click', function(e) {
		e.preventDefault();
		amountInput.value = '';
		termInput.value = '';
		interestInput.value = '';
	
		monthlyPaymentSpan.textContent = '$';
		totalPaymentSpan.textContent = '$';
	});
});
