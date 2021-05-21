export interface Chat {
    sessionId: string;
    channel: string;
    firstName: string;
    lastName: string;
    createdTime: Date;
    lastMessageTime: Date;
    id: number;
} 

export interface Message {
    botId: number;
    buttons: []
    carousel: []
    contentType: ContentType;
    createdTime: number
    dropdown: []
    id: number;
    sessionId: string;
    text: string;
    title: string;
    type: Type
    url: string;
}

export enum ContentType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    DROPDOWN = "DROPDOWN",
    BUTTON = "BUTTON",
    CAROUSEL = "CAROUSEL",
    DATE = "DATE",
    FILE = "FILE"
}

export enum Type {
    OUTGOING = "OUTGOING",
    INCOMING = "INCOMING"  
}