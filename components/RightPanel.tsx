'use client';
import DateTime from './DateTime';
import Preview from './Preview';
import CaixaTextos from './CaixaTextos';
import InputFrases from './InputFrases';

export default function RightPanel() {
    return (
        <div className='ml-2  min-h-screen mb-2 justify-between px-1'>
            <DateTime />
            
            <div className='pt-2 mt-2 h-1/3'>
            <Preview />
            </div>

            <div className='pt-2 mt-2 h-1/3 min-h-1/3'>
            <CaixaTextos />
            </div>
            <div className='pt-2 mt-2 h-1/3 min-h-1/3'>
            <InputFrases />
            </div>
        </div>
    );
}