import React, { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import Sharedb from 'sharedb/lib/client';
import richText from 'rich-text';

// Registering the rich text type to make sharedb work
// with our quill editor
Sharedb.types.register(richText.type);

// Connecting to socket server
const socket = new WebSocket('ws://127.0.0.1:8080');
const connection = new Sharedb.Connection(socket);