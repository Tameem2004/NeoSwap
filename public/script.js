document.getElementById('swapForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const fromToken = document.getElementById('fromToken').value;
    const toToken = document.getElementById('toToken').value;
    const amount = document.getElementById('amount').value;
  
    const response = await fetch('/swap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fromToken, toToken, amount }),
    });
  
    const result = await response.json();
  
    document.getElementById('swapResult').textContent = result.message;
  });
  