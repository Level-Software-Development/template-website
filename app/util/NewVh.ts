const NewVh = (): string => {
  if (!(typeof window === 'undefined') && CSS.supports && CSS.supports('height: 100dvh')) {
    return '100dvh';
  }

  return '100vh';
};

export { NewVh };
