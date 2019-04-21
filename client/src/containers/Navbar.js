import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <nav class="navbar navbar-expand-lg">
        <div className="container">
            <span class="navbar-brand mb-0 h1">Nanojournal</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link btn-link text-muted" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link btn-link text-muted" to="/overview">Overview</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)