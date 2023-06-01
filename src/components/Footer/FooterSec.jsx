import Link from 'next/link';
import React from 'react';

const FooterSec = () => {
    return (
        <div className=' h-10'>
            <p className='text-[24px] text-title text-center'>Takiven 2023 - <Link  href="/">Términos y condiciones - Privacidad - Legal</Link> </p>
        </div>
    );
};

export default FooterSec;