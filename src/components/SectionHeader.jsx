const SectionHeader = ({text, className}) => {
    return (
        <div>
            <h2 className={`section-header ${className}`}>{text}</h2>
        </div>
    );
}

export default SectionHeader;
