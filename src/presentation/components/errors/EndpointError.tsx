export const EndpointError = () => {
    return (
        <div className="flex flex-col h-screen w-full items-center justify-center" data-testid="endpoint-error">
            <div className="text-4xl font-bold">Ha ocurrido un error</div>
            <div className="text-2xl">Por favor, intenta más tarde</div>
        </div>
    );
}