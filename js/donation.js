<script>
  document.getElementById("donateForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const amount = document.getElementById("donation-amount").value;
    document.getElementById("confirmation-message").textContent = `Thank you for donating $${amount}! 💙`;
    document.getElementById("donation-amount").value = "";
  });
</script>
<script>
  function toggleDonateButton() {
    const checkbox = document.getElementById("agreeTerms");
    const button = document.getElementById("donateBtn");
    button.disabled = !checkbox.checked;
  }
</script>