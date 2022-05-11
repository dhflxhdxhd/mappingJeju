from flask import Flask
from flask import Blueprint, session, request, redirect, url_for, jsonify
from backend import db

bp = Blueprint('thema', __name__, url_prefix='/thema')

