import { useState, useEffect } from 'react';

export default function TicketForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e: any) => {

        // if we don't want reload the page when form is submitted we need to call this method
        e.preventDefault();

        const ticketData = {
            id: new Date().toISOString(),
            title,
            description,
            priority,
        }
        clearForm();
    }

    

    return (
        <form className='ticket-form' onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='text' value={title} className='form-input' onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} className='form-input' onChange={e => setDescription(e.target.value)} ></textarea>
            </div>
            <fieldset className='priority-fieldset'>
                <legend>Priority</legend>
                {
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label key={value} className='priority-label'>
                            <input type='radio' value={value} checked={priority === value} className='priority-input' onChange={(e) => setPriority(e.target.value)}></input>
                            {label}
                        </label>

                    ))
                }
            </fieldset>

            <button type='submit' className='button' onClick={handleSubmit}>Submit</button>
        </form>
    )
}