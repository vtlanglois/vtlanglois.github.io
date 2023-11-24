const SectionHeader = ({text, className}) => {
    return (
        <div>
            <h2 className={`section-header mb-lg-3 ${className}`}>{text}</h2>
        </div>
    );
}

export default SectionHeader;
