"use client";

import { useState } from 'react';
import { Switch, Spacer, Button, Input } from '@nextui-org/react';
import CustomSwitch from "@/components/custom-switch";
import PasswordTextarea from "@/components/password-textarea";

export const Password = () => {
        const [options, setOptions] = useState({
            uppercase: false,
            numbers: false,
            lowercase: false,
            symbols: false,
        });
        const [passwordLength, setPasswordLength] = useState(8);
        const [generatedPassword, setGeneratedPassword] = useState('');
        const [isCopied, setIsCopied] = useState(false);



    const handleOptionChange = (option: keyof typeof options) => {
            setOptions((prevOptions) => ({
                ...prevOptions,
                [option]: !prevOptions[option],
            }));
        };

        const handleLengthChange = (length: number) => {
            setPasswordLength(length);
        };

        const generatePassword = () => {
            // 生成密码的逻辑
            let characters = '';
            if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (options.numbers) characters += '1234567890';
            if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
            if (options.symbols) characters += '!@#$%^&*()';

            let password = '';
            for (let i = 0; i < passwordLength; i++) {
                try {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    password += characters[randomIndex];
                } catch (error) {
                    password = 'the token';
                }
            }

            setGeneratedPassword(password);
        };

        const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText(generatedPassword);
                setIsCopied(true);
            } catch (error) {
                console.error('Failed to copy password:', error);
            }
        };

        return (
            <div>
                <div className="flex gap-6 justify-center">
                    <CustomSwitch
                        name="uppercase"
                        description="ABCDEFGHIJKLMN..."
                        // checked={options.uppercase} }}
                        // isSelected={options.uppercase}
                        // onChange={() => handleOptionChange('uppercase')}
                        checked={options.uppercase}
                        onChange={() => handleOptionChange('uppercase')}
                    />
                    <CustomSwitch
                        name="numbers"
                        description="0123456789"
                        checked={options.numbers}
                        onChange={() => handleOptionChange('numbers')}
                    />

                </div>
                <div className="flex gap-6 justify-center">
                    <CustomSwitch
                        name="lowercase"
                        description="abcdefghijklmn..."
                        checked={options.lowercase}
                        onChange={() => handleOptionChange('lowercase')}
                    />
                    <CustomSwitch
                        name="symbols"
                        description="!@#$%^&*()"
                        checked={options.symbols}
                        onChange={() => handleOptionChange('symbols')}
                    />
                </div>
                <div className="w-screen p-8 flex items-start justify-center">
                    <PasswordTextarea
                        password={generatedPassword}
                    />
                </div>
                <div className="flex flex-wrap gap-48 justify-center">
                    <Button onClick={generatePassword} color="success">
                        Generate
                    </Button>
                    <Button onClick={copyToClipboard} color="primary">
                        Copy
                    </Button>
                </div>
            </div>
        );
};
