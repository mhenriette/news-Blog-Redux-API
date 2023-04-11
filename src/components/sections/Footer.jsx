const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="py-16 flex items-center justify-center mx-2 ">
                <div className="flex gap-2 flex-col pr-10 border-r border-solid">
                    <h1 className="font-bold text-lg">The news</h1>
                    <p>Kigali, Rwanda</p>
                    <p>Email: <a href="mailto:mhenriette00@gmail.com" className="font-bold hover:text-red-700">mhenriette00@gmail.com</a></p>
                </div>
                <div className="pl-10">
                    <p>
                        Designed & Developed by&nbsp;
                        <a href="https://github.com/mhenriette" className="font-bold hover:text-red-700">
                            Munezero
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
