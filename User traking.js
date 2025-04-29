const lastUpdatedDiv = document.getElementById('lastUpdated');

database.ref('orderStatus').on('value', (snapshot) => {
  const data = snapshot.val();
  if (data && data.status) {
    statusDiv.innerText = data.status;

    // Change color based on status
    if (data.status === 'Order Received') {
      statusDiv.style.color = 'blue';
    } else if (data.status === 'Preparing Your Food') {
      statusDiv.style.color = 'orange';
    } else if (data.status === 'Out for Delivery') {
      statusDiv.style.color = 'goldenrod';
    } else if (data.status === 'Delivered') {
      statusDiv.style.color = 'green';
    } else {
      statusDiv.style.color = 'black';
    }

    // Show last updated time
    if (data.timestamp) {
      const date = new Date(data.timestamp);
      lastUpdatedDiv.innerText = `Last updated: ${date.toLocaleTimeString()}`;
    }

  } else {
    statusDiv.innerText = 'Waiting for order update...';
  }
});
