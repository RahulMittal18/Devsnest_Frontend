const Templates = ({ templates, setMeme }) => {
  return (
    <div className="templates">
      {templates.map((template) => (
        <div
          key={template.id}
          className="template"
          onClick={() => {
            setMeme(template);
          }}
        >
          <div className="image">
            <img src={template.url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Templates;
