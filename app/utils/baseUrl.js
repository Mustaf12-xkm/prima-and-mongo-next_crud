// @ts-nocheck
export const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return `${process.env.NEXT_PUBLIC_SITE_URL}`
    }

    return `${process.env.NEXT_PUBLIC_PRO_SITE_URL}`;
};

