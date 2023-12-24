const SectionHeader = ({className, children}) => {
    return (
        <div>
            <h2 className={`section-header mb-3 ${className}`}>{children}</h2>
        </div>
    );
}

export default SectionHeader;
