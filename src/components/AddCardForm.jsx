import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { uid } from '../constants';
import { addCard } from '../state-management/actions/cardActions';
import { chooseCard } from '../state-management/actions/payCardActions';
import styles from '../styles/AddCardForm.module.css';

function AddCardForm({ setShowAddCardForm }) {
	const [ disableSubmit, setDisableSubmit ] = useState(true);
	const dispatch = useDispatch();

	const expireMonth = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ];
	const expireYear = [ '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031' ];
	let today = new Date();
	let expireDate = new Date();
	const validate = (values) => {
		let errors = {};
		if (!values.cardNumber) {
			errors.cardNumber = 'Required';
		} else if (!values.cardNumber.match(/^\d+$/)) {
			errors.cardNumber = 'Can contain only numbers!';
		} else if (
			!(values.cardNumber.startsWith('5') || values.cardNumber.startsWith('4')) ||
			values.cardNumber.length !== 16
		) {
			errors.cardNumber = 'Not a valid card number';
		}

		if (!values.cardHolder) {
			errors.cardHolder = 'Required';
		} else if (!values.cardHolder.match(/^[a-z ,.'-]+$/i)) {
			errors.cardHolder = 'Not a valid name';
		} else if (values.cardHolder.length > 30) {
			errors.cardHolder = 'Too long name';
		}

		const isExpired =
			expireDate.setFullYear(parseInt(values.expireYear), parseInt(values.expireMonth) - 1, 1) < today;
		if (isExpired) {
			errors.expireDate = 'Your card is expired';
		}

		if (!values.cvc) {
			errors.cvc = 'Required';
		} else if (values.cvc.length !== 3) {
			errors.cvc = 'Not a valid CVC code';
		}

		if (errors && Object.keys(errors).length === 0 && errors.constructor === Object) {
			setDisableSubmit(false);
		}

		return errors;
	};

	const handleSubmit = (payload) => {
		setShowAddCardForm(false);
		dispatch(addCard(payload, uid));
		dispatch(chooseCard(`${payload.cvc}${uid}`));
	};
	return (
		<div>
			<Formik
				initialValues={{
					cardNumber: '',
					cardHolder: '',
					expireMonth: '01',
					expireYear: '2021',
					cvc: ''
				}}
				onSubmit={(values) => console.log(values)}
				validate={validate}
			>
				{({ values, errors }) => (
					<Form className={styles.form}>
						<label htmlFor="cardNumber">Card number</label>
						<Field
							id="cardNumber"
							name="cardNumber"
							value={values.cardNumber}
							placeholder="5123415673849827"
						/>
						{errors.cardNumber && <span className={styles.errorMessage}>{errors.cardNumber}</span>}

						<label htmlFor="cardHolder">Card Holder</label>
						<Field id="cardHolder" name="cardHolder" value={values.cardHolder} placeholder="Jane Doe" />
						{errors.cardHolder && <span className={styles.errorMessage}>{errors.cardHolder}</span>}

						<label htmlFor="expireDate">Expire Date</label>
						<div>
							<Field
								id="expireMonth"
								name="expireMonth"
								value={values.expireMonth}
								placeholder="04"
								as="select"
							>
								{expireMonth.map((item) => <option key={item} value={item} label={item} />)}
							</Field>
							{' / '}
							<Field
								id="expireYear"
								name="expireYear"
								value={values.expireYear}
								placeholder="21"
								as="select"
							>
								{expireYear.map((item) => <option key={item} value={item} label={item} />)}
							</Field>
							{errors.expireDate && <span className={styles.errorMessage}>{errors.expireDate}</span>}
						</div>
						<label htmlFor="cvc">CVC</label>
						<Field id="cvc" name="cvc" value={values.cvc} placeholder="555" />
						{errors.cvc && <span className={styles.errorMessage}>{errors.cvc}</span>}
						<button type="submit" onClick={() => handleSubmit(values)} disabled={disableSubmit}>
							Save
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default AddCardForm;
