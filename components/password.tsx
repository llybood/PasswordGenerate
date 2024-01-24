"use client";

import React, { useEffect, useState } from 'react';
import { Button, Slider, Textarea } from '@nextui-org/react';
import CustomSwitch from "@/components/custom-switch";
import toast, { Toaster } from 'react-hot-toast';

export const Password = () => {
    const [options, setOptions] = useState({
        uppercase: true,
        numbers: true,
        lowercase: true,
        symbols: true,
    });
    const [passwordLength, setPasswordLength] = useState(16);
    const [passwordNumber, setPasswordNumber] = useState(1);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleOptionChange = (option: keyof typeof options) => {
            setOptions((prevOptions) => ({
                ...prevOptions,
                [option]: !prevOptions[option],
            }));
        };

    // 选项改变时, 触发生成密码
    useEffect(() => {
        generateMultiplePasswords();
    }, [options]);

    // 组件加载时, 触发生成密码
    useEffect(() => {
        generateMultiplePasswords();
    }, []);

    // 密码长度改变时,触发生成密码
    useEffect(() => {
        generateMultiplePasswords();
    }, [passwordLength]);

    // 密码数量改变时,触发生成密码
    useEffect(() => {
        generateMultiplePasswords();
    }, [passwordNumber]);

    // 按下回车键,触发生成密码
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            generateMultiplePasswords();
        }
    };

    // 根据选项的状态,生成密码
    const generatePassword = () => {
        // 生成密码的逻辑
        let characters = '';
        if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (options.numbers) characters += '1234567890';
        if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (options.symbols) characters += '~!@#$%^&*(){}[]+-';

        let password = ''
        if (!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) {
            return 'Please specify an option...';
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    };

    // 生成多个密码
    const generateMultiplePasswords = () => {
        let passwords = '';

        for (let i = 0; i < passwordNumber; i++) {
            const password = generatePassword();
            passwords += password + '\n'
        }

        setGeneratedPassword(passwords.slice(0, -1));
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generatedPassword);
            toast.success('Password Copied');
        } catch (error) {
                console.error('Failed to copy password:', error);
            }
        };

        return (
            <div>
                {/* <div className="flex gap-6 flex-col justify-center md:flex-row"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
                    <CustomSwitch
                        name="uppercase"
                        description="ABCDEFGHIJKLMN..."
                        isSelected={options.uppercase}
                        onValueChange={() => handleOptionChange('uppercase')}
                    />
                    <CustomSwitch
                        name="numbers"
                        description="0123456789"
                        isSelected={options.numbers}
                        onValueChange={() => handleOptionChange('numbers')}
                    />
                </div>
                {/* <div className="flex gap-6 mt-4 flex-col justify-center md:flex-row"> */}
                <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
                    <CustomSwitch
                        name="lowercase"
                        description="abcdefghijklmn..."
                        isSelected={options.lowercase}
                        onValueChange={() => handleOptionChange('lowercase')}
                    />
                    <CustomSwitch
                        name="symbols"
                        description="~!@#$%^&*(){}[]+-"
                        isSelected={options.symbols}
                        onValueChange={() => handleOptionChange('symbols')}
                    />
                </div>
                <div className="grid grid-cols-1 mt-8 gap-4 justify-items-center">
                    <Slider
                        size="sm"
                        label="Password Length"
                        minValue={4}
                        maxValue={100}
                        className="max-w-md"
                        value={passwordLength}
                        onChange={(value: any) => setPasswordLength(value)}
                    />
                    <Slider
                        size="sm"
                        label="Password Number"
                        minValue={1}
                        maxValue={10}
                        className="max-w-md"
                        value={passwordNumber}
                        onChange={(value: any) => setPasswordNumber(value)}
                    />
                </div>

                <div className="flex mt-8 justify-center">
                    <Textarea
                        isReadOnly
                        variant="bordered"
                        labelPlacement="outside"
                        value={generatedPassword}
                        className="max-w-xl"
                    />
                </div>
                <div className="flex flex-wrap mt-8 gap-48 justify-center">
                    <Button
                        onClick={generateMultiplePasswords}
                        color="success"
                        onKeyDown={handleKeyDown}>
                        Generate
                    </Button>
                    <Button onClick={copyToClipboard} color="primary">
                        Copy
                    </Button>
                    <Toaster position="bottom-center"/>
                </div>
            </div>
        );
};
