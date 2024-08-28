export const Loader = () => {
    return (
        <div className="m-8 w-full" data-testid="loader">
            <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50">
                <div className="border-t-transparent w-16 h-16 border-4 border-[#1C1A91] border-solid rounded-full animate-spin"></div>
            </div>
        </div>
    );
  };
  