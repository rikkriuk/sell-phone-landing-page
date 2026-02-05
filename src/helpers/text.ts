const spreadIf = (key: string, value?: any) => 
   value ? { [key]: value } : {};

export { spreadIf };