
import React from 'react';
import { useState } from 'react';

import { Icon } from 'react-icons-kit'; // Correct import for Icon
import { basic_eye } from 'react-icons-kit/linea/basic_eye';
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed';
import { FaCheckCircle } from 'react-icons/fa'; // FontAwesome check circle icon
import { FaExclamationCircle } from 'react-icons/fa'; // FontAwesome exclamation circle icon

const LoginValidations = () => {
    const [type, setType] = useState("password");

    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    const handleChange = (value) => {
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\\$%\\^&\\*])');
        const length = new RegExp('(?=.{8,})');

        setLowerValidated(lower.test(value));
        setUpperValidated(upper.test(value));
        setNumberValidated(number.test(value));
        setSpecialValidated(special.test(value));
        setLengthValidated(length.test(value));
    };

    return (
        <div className='LoginValidations'>
            <div className="box">
            <h1>Password Validation</h1>
                <div className="input-width-icon">
                   
                    <input
                        type={type}
                        className='customer-input'
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    {type === "password" ? (
                        <span className='icon-span' onClick={() => setType("text")}>
                            <Icon icon={basic_eye_closed} size={18} />
                        </span>
                    ) : (
                        <span className='icon-span' onClick={() => setType("password")}>
                            <Icon icon={basic_eye} size={18} />
                        </span>
                    )}
                </div>
                <main className='tracker-box'>
                    <div className={lowerValidated ? 'validated' : 'not-validated'}>
                        {lowerValidated ? (
                            <span className='list-icon green'>
                                <FaCheckCircle size={18} />
                            </span>
                        ) : (
                            <span className='list-icon'>
                                <FaExclamationCircle size={18} />
                            </span>
                        )}
                        At least one Lowercase letter
                    </div>

                    <div className={upperValidated ? 'validated' : 'not-validated'}>
                        {upperValidated ? (
                            <span className='list-icon green'>
                                <FaCheckCircle size={18} />
                            </span>
                        ) : (
                            <span className='list-icon'>
                                <FaExclamationCircle size={18} />
                            </span>
                        )}
                        At least one Uppercase letter
                    </div>

                    <div className={numberValidated ? 'validated' : 'not-validated'}>
                        {numberValidated ? (
                            <span className='list-icon green'>
                                <FaCheckCircle size={18} />
                            </span>
                        ) : (
                            <span className='list-icon'>
                                <FaExclamationCircle size={18} />
                            </span>
                        )}
                        At least one Number
                    </div>

                    <div className={specialValidated ? 'validated' : 'not-validated'}>
                        {specialValidated ? (
                            <span className='list-icon green'>
                                <FaCheckCircle size={18} />
                            </span>
                        ) : (
                            <span className='list-icon'>
                                <FaExclamationCircle size={18} />
                            </span>
                        )}
                        At least one Special Character
                    </div>

                    <div className={lengthValidated ? 'validated' : 'not-validated'}>
                        {lengthValidated ? (
                            <span className='list-icon green'>
                                <FaCheckCircle size={18} />
                            </span>
                        ) : (
                            <span className='list-icon'>
                                <FaExclamationCircle size={18} />
                            </span>
                        )}
                        At least 8 Characters
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LoginValidations;
