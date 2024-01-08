const SectionHeader = ({className, id, children}) => {

    return (
        <div>
            <h2 id={id} className={`section-header mb-3 ${className}`}>{children}</h2>
        </div>
    );
}

export default SectionHeader;
