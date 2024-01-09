const TruncatedText = ({ text, maxLength }) => {
  const length = maxLength ? maxLength : text.length;
  let truncatedText = "";
  if (text?.length >= maxLength) {
    truncatedText = text.substring(0, length);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");

    if (lastSpaceIndex !== -1 && lastSpaceIndex < maxLength - 1) {
      truncatedText = truncatedText.slice(0, lastSpaceIndex) + "...";
    } else {
      truncatedText += "...";
    }
  } else {
    truncatedText = text;
  }
  const textLines = truncatedText.split(/\n/);

  return (
    <div className="d-flex flex-column gap-1">
      {textLines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  );
};

export default TruncatedText;
