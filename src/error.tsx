import { useEffect, useState } from "react"

const Error = ({error}: {error: Error}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 3000);
  }, []);

  return (
      <div style={
          {
            position: "absolute",
            top: "-100px",
            left: "50%",
            paddingLeft: "10px",
            paddingRight: "10px",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #FF4E50, #B22222)",
            color: "#FFFFFF",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out"
          }
        }>
       <h4>{error.message || "Some unkown error has occured"}</h4>
      </div>
  )
}

export default Error
