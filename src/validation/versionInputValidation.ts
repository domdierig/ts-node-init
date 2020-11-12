const versionNumberErrorMsg = 'invalid version number';
const versionNumberRegex = /[0-9]+\.[0-9]+\.[0-9]+/;

export const versionInputValidation = (input: string): string | boolean => {
    if (versionNumberRegex.test(input)) {
        return true;
    }

    return versionNumberErrorMsg;
};
