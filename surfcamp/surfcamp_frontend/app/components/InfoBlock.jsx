import ReactMarkdown from "react-markdown";

const InfoBlock = ({ data }) => {
  const { headline, text, showImageRight, imgSrc, button } = data;
  console.log(data.button);
  return (
    <div>
      <div className={`info ${showImageRight ? "info--reversed" : ""}`}>
        <img
          className="info__image"
          src={imgSrc || "/info-blocks/rectangle.png"}
          alt="" />
        <div className="info__text">
          <h2 className="info__headline">{headline}</h2>
          <ReactMarkdown className="copy">
            {text}
          </ReactMarkdown>
          {button}
        </div>
      </div>
    </div>
  )
}

export default InfoBlock