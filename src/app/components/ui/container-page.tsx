interface ContainerPageProps {
    children: React.ReactNode;
    className?: string; 
}

const ContainerPage = ({ children, className = '' }: ContainerPageProps) => {
    return (
        <div className={`w-full max-w-[1600px] mt-1 px-4 mx-auto md:pb-0 md:px-6 overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export default ContainerPage;
