export function renderParcelSummaryHtml(data, trackingId, cost) {
  const { baseCost, weightCost, perKgRate, weight, isNonDocument, total } =
    cost;

  return `
    <div class="text-left text-sm leading-relaxed space-y-1">
      <strong>Parcel:</strong> ${data.title} (${data.type})<br/>
      <strong>Sender:</strong> ${data.sender_name} (${data.sender_contact})<br/>
      <strong>Receiver:</strong> ${data.receiver_name} (${data.receiver_contact})<br/>
      <strong>Tracking ID:</strong> ${trackingId}<br/>
      <hr class="my-2"/>
      <strong>📊 Cost Breakdown:</strong><br/>
      🔹 Base Cost: ৳${baseCost}<br/>
      ${
        isNonDocument
          ? `🔹 Weight Cost: ${weight}kg × ৳${perKgRate} = ৳${weightCost}<br/>`
          : `🔹 Weight Cost: N/A (Document type)<br/>`
      }
      <hr class="my-2"/>
      <strong>💰 Total Cost: ৳${total}</strong>
    </div>
  `;
}
