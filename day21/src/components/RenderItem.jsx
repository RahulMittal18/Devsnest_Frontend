import {useState} from 'react';


function RenderItem({ updateItem, removeItem, item, index }) {
	const [isEditMode, setIsEditMode] = useState(false);

	return (
		<div className="display-box">
			<div className="box-body">

				{isEditMode ? (
					<input
                        required
						type='text'
						name='title'
						value={item.title}
						onChange={e => updateItem(index, { title: e.target.value })}
                        autoComplete="off"
					/>
				) : (
					<h5 >{item.title}</h5>
				)}


				{isEditMode ? (
					<input
                        required
						type='number'
						name='calorie'
						value={item.calorie}
						onChange={e => updateItem(index, { calorie: e.target.value })}
					/>
				) : (
					<p >
						You have consumed {item.calorie} calories
					</p>
				)}


				<div className="btn-div">
					<button className="btn btn-del"  onClick={() => removeItem(index)}>
						Delete
					</button>


					<button	className="btn btn-main"
						onClick={() => setIsEditMode(!isEditMode)}>
						{isEditMode ? 'Save' : 'Edit'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default RenderItem;