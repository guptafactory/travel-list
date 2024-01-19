function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  const packedPercentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      {packedPercentage === 100 && <em>You got everything! Ready to go ✈</em>}
      {packedPercentage !== 100 && (
        <em>
          👜You have {numItems} items in your packing list, and you already
          packed {numPackedItems} ({packedPercentage}%)
        </em>
      )}
    </footer>
  );
}
export default Stats;
