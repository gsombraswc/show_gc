'use client';
import DateTime from './DateTime';
import Preview from './Preview';
import InputFrases from './InputFrases';
import Cabeça from './Cabeça';

export default function RightPanel() {
    return (
        <div className='ml-2 mr-2 min-h-screen mb-2 justify-between px-1'>
            <DateTime />
            
            <div className='pt-2 mt-2 h-1/3'>
            <Preview />
            </div>

            <div className='pt-2 h-1/3 min-h-1/3'>
            <Cabeça />
            </div>
            <div className='pt-2 h-1/3 min-h-1/3'>
            <InputFrases />
            </div>
        </div>
    );
}