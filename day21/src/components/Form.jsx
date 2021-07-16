import {useState} from 'react';

function AddItemForm({ addItem }) {
	const [title, setTitle] = useState('');
	const [calorie, setCalorie] = useState('');


	const handleSubmit = e => {
		e.preventDefault();
		addItem({ title, calorie });
        
		setTitle('');
		setCalorie('');
    
	};


	return (
		<form
			onSubmit={handleSubmit}
			className='form'>
			<div className="input-box">
				<div className="input-title">
					<input
						type='text'
						name='title'
												
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Item name'
                        autoComplete="off"
					/>
				</div>
				<div>
		            <input
						type='number'
						name='number'

						value={calorie}
						onChange={e => setCalorie(e.target.value)}
						placeholder='Calorie amount'
					/>
				</div>
			</div>
			<button type='submit' className="btn-submit">
				Add Item
			</button>
      
		</form>
     
	);
}


export default AddItemForm;