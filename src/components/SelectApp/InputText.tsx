import React from "react";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputText: React.FC<Props> = ({ text, setText }) => {
  const textHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setText((e.target as HTMLInputElement).value);
  };
  return (
    <div className="pt-8">
      <h1 className="pb-2 font-bold">Tapez votre texte</h1>
      <textarea
        className="w-full border-gray-400 border rounded p-2"
        onChange={(e) => textHandler(e)}
        value={text}
      />
    </div>
  );
};

export default InputText;
