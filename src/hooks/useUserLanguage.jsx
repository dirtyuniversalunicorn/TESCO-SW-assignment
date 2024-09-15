import { useState, useEffect } from "react";

export default function useUserLanguage() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const adjustedLanguage = browserLanguage === "cs" ? "cz" : browserLanguage; //weather API is recognizing cz but browser returns cs

    setLanguage(adjustedLanguage);
  }, []);

  return language;
}
